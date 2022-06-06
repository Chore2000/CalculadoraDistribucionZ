package funcionamiento;

import entity.Ejercicios;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Query;
import org.hibernate.Session;

public class ServletEjercicios extends HttpServlet 
{
    private PrintWriter out;
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException 
    {
        out = response.getWriter();
        
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.setContentType("application/json");
        StringBuilder json = new StringBuilder();          
        
        json.append("[");
        Session hibernateS = HibernateUtil.getSessionFactory().openSession();
        //Select
        Query select = hibernateS.createQuery("FROM Ejercicios");
        List<Ejercicios> ejercicios = select.list();
        
        int i=0;
        for(Ejercicios e : ejercicios)
        {
            json.append("{\"id\": ");
            json.append(e.getId());
            json.append(", ");
            json.append(e.getColumnajson());
            
            if(i<ejercicios.size()-1)
            {
                json.append(", ");
                i++;
            }
        }
        json.append("]");
        hibernateS.close();
        
        out.write(json.toString());
    }
}
