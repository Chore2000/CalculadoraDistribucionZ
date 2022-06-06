package funcionamiento;

import entity.Ejercicios;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Session;

public class ServletBorrar extends HttpServlet 
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
        
        int id = Integer.parseInt(request.getParameter("id"));

        json.append("{ \"id\": ").append(id).append(" }");
        
        Session hibernateS = HibernateUtil.getSessionFactory().openSession();
        //Delete
        hibernateS.beginTransaction();
        
        Ejercicios ej = new Ejercicios();
        ej.setId(id);
        hibernateS.delete(ej);
        
        hibernateS.getTransaction().commit();
        hibernateS.close();
        
        out.write(json.toString());
    }
}
