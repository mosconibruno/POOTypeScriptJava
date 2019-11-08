import javax.print.AttributeException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AtletaDAO {
    private Connection conn;

    public AtletaDAO()throws SQLException{
        conn=ConnectionFactory.getConnection();
    }

    public void dropAtleta() throws SQLException{
        String sql="DROP TABLE Atleta;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.execute();

    }

    public void createTableAtleta() throws SQLException{
        String sql="CREATE TABLE IF NOT EXISTS Atleta("
                + "id INT(5) AUTO_INCREMENT PRIMARY KEY, "
                + "nome varchar(30) NOT NULL, "
                + "categoria varchar(15) NOT NULL,"
                + "idade INT(5) );";
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.execute();

    }

    public void insertAtleta(Atleta a)throws SQLException{
        String sql="INSERT INTO Atleta (nome,categoria,idade) VALUES (?,?,?);";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, a.getNome());
        ps.setString(2, a.getCategoria());
        ps.setInt(3, a.getIdade());
        ps.execute();
    }

    public Atleta listaUmAtleta(int id) throws SQLException {
        String sql = "SELECT * from Atleta Where id=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, id);
        ResultSet rs = ps.executeQuery();
        Atleta atleta = null;

        if(rs.next()){
            Integer idAtleta = rs.getInt("id");
            String nome = rs.getString("nome");
            String categoria = rs.getString("categoria");
            Integer idade = rs.getInt("idade");
            atleta = new Atleta(idAtleta, nome, categoria, idade);
        }

        return atleta;
    }


    public void listar() throws SQLException {
        String sql = "SELECT * from Atleta;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        while(rs.next()) {
            System.out.println("\n Codigo do atleta : "+rs.getObject("id"));
            System.out.println("Nome do atleta : "+rs.getObject("nome"));
            System.out.println("Categoria : "+rs.getObject("categoria"));
            System.out.println("Idade : "+rs.getInt("idade"));
        }
    }

    public void deletarAtleta(int id) throws SQLException {
        String sql = "DELETE from Atleta WHERE id=?;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, id);
        ps.execute();
        ps.close();
    }

    public void alterarCategoriaAtleta(int id, String cat) throws SQLException {

        String sql = "UPDATE Atleta SET categoria=? WHERE id=?;";
        PreparedStatement ps = conn.prepareStatement(sql);

        ps.setString(1, cat);
        ps.setInt(2, id);

        ps.executeUpdate();
        ps.close();
    }
}
