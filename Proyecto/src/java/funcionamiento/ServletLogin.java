package funcionamiento;

import entity.Usuarios;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Query;
import org.hibernate.Session;

public class ServletLogin extends HttpServlet
{
    private PrintWriter out;
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException 
    {
        String usuario;
        out = response.getWriter();
        
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.setContentType("application/json");
        StringBuilder json = new StringBuilder();          
        
        Session hibernateS = HibernateUtil.getSessionFactory().openSession();
        //Select
        Query select = hibernateS.createQuery("FROM Usuarios WHERE usuario=:us AND contra=:con");
        select.setParameter("us", request.getParameter("user"));
        select.setParameter("con", request.getParameter("pass"));
        
        json.append("{ \"usuario\": ");
        
        if(select.uniqueResult() != null)
        {
            Usuarios user = (Usuarios) select.uniqueResult();
            usuario = user.getUsuario();
            json.append("\"").append(usuario).append("\"");
        }else json.append("null");
        
        json.append(" }");
        hibernateS.close();
        
        out.write(json.toString());
    }
}
