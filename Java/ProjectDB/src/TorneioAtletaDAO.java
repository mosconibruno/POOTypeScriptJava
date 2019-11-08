import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TorneioAtletaDAO {
    private Connection conn;

    public TorneioAtletaDAO()throws SQLException{
        conn=ConnectionFactory.getConnection();
    }

    public void dropTorneioAtleta() throws SQLException{
        String sql="DROP TABLE TorneioAtleta;";
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.execute();

    }

    public void createTorneio() throws SQLException{
        String sql="CREATE TABLE TorneioAtleta "
                + "(id_torneio integer foreign key references Torneio(id) , "
                + "id_atleta integer foreign key references Atleta(id),"
                + "nota_atleta integet);";
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.execute();

    }

    public void insertTorneioAtleta(Torneio t,Atleta a,int nota)throws SQLException{
        String sql="INSERT INTO TorneioAtleta (id_torneio,id_atleta,nota_atleta) VALUES (?,?,?);";
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.setInt(1,t.getId());
        ps.setInt(2, a.getId());
        ps.setInt(3,nota);
        ps.execute();
    }

    public void listarAtletaUmtorneio(Torneio t) throws SQLException {
        String sql = "SELECT * from Atleta inner join TorneioAtleta on Torneioatleta.id_atleta=Atleta.id where TorneioAtlata.id_torneio=? ;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, t.getId());
        ResultSet rs = ps.executeQuery();
        while(rs.next()) {
            System.out.println("\n Codigo do atleta : "+rs.getObject("id"));
            System.out.println("Nome do atleta : "+rs.getObject("nome"));
            System.out.println("Categoria : "+rs.getObject("categoria"));
            System.out.println("Idade : "+rs.getInt("idade"));
        }
    }

    public void listarTorneioUmAtleta(Atleta a) throws SQLException {
        String sql = "SELECT * from Torneio inner join TorneioAtleta on TorneioAtleta.id_torneio=Torneio.id where TorneioAtleta.id_atleta=?;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, a.getId());
        ResultSet rs = ps.executeQuery();
        while(rs.next()) {
            System.out.println("\n Codigo do Torneio : "+rs.getObject("id"));
            System.out.println("Nome do Torneio : "+rs.getObject("nome"));
            System.out.println("Localiza��o : "+rs.getObject("local"));
        }
    }
}
