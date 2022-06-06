package funcionamiento;

import entity.Ejercicios;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Session;
import org.apache.commons.math3.distribution.NormalDistribution;

public class ServletCrear extends HttpServlet
{
    private PrintWriter out;
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException
    {
        out = response.getWriter();
        
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.setContentType("application/json");
        StringBuilder cadena = new StringBuilder();
        StringBuilder json = new StringBuilder();  
        
        String type = request.getParameter("type");
        String menor = request.getParameter("menor");
        double m = Double.parseDouble(menor);
        String mayor = request.getParameter("mayor");
        double M = Double.parseDouble(mayor);
        
        double resultado;
        
        switch (type) {
            case "0":
                //NormalDistribution(media, desviacion estandar), donde media = u (mu) y desviacion = o (sigma)
                //Probability (a, b) igual a P(a < Z < b)
                resultado = new NormalDistribution(0, 1).probability(m, M);
                break;
                
            case "1":
                //Probability (a) igual a P(Z <= a)
                resultado = new NormalDistribution(0, 1).cumulativeProbability(M);
                break;
                
            default:
                double aux = new NormalDistribution(0, 1).cumulativeProbability(m);
                resultado = 1-aux;
                break;
        }
        
        
        if(m<1 && m != -9999)
        {
            menor = String.valueOf(m);
        }
        
        if(M<1)
        {
            mayor = String.valueOf(M);
        }
        
        cadena.append("{ ");
        json.append("\"type\": ").append(type);
        json.append(", \"menor\": ").append(menor);
        json.append(", \"mayor\": ").append(mayor);
        json.append(", \"resultado\": ").append(resultado);
        json.append(" }");
        cadena.append(json);
        
        Session hibernateS = HibernateUtil.getSessionFactory().openSession();
        //Insert
        hibernateS.beginTransaction();
        
        Ejercicios ej = new Ejercicios(json.toString());
        hibernateS.save(ej);
        
        hibernateS.getTransaction().commit();
        hibernateS.close();
        
        out.write(cadena.toString());
    }
}
