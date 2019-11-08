import java.sql.*;

public class ConnectionFactory {
    public static Connection getConnection() throws SQLException {
        String USERNAME = "root";
        String PASSWORD = "root";
        String URL_HOST = "jdbc:mysql://localhost:3306/teste";
        return DriverManager.getConnection(URL_HOST, USERNAME, PASSWORD);
    }
}