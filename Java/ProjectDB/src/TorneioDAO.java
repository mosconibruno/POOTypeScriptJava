import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TorneioDAO {
    private Connection conn;

    public TorneioDAO()throws SQLException{
        conn=ConnectionFactory.getConnection();
    }

    public void dropTorneio() throws SQLException{
        try{
            String sql="DROP TABLE Torneio;";
            PreparedStatement ps=conn.prepareStatement(sql);
            ps.execute();
        }catch(Exception e){
            System.out.println(e.toString());
        }


    }

    public void createTorneio() throws SQLException{
        String sql="CREATE TABLE Torneio "
                + "(id INT(5) AUTO_INCREMENT PRIMARY KEY, "
                + "etapa varchar(30), "
                + "local varchar(50));";
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.execute();

    }

    public void insertTorneio(Torneio t)throws SQLException{
        String sql="INSERT INTO Torneio (etapa,local) VALUES (?,?);";
        PreparedStatement ps=conn.prepareStatement(sql);
        ps.setString(1, t.getEtapa());
        ps.setString(2, t.getLocal());
        ps.execute();
    }

    public Torneio listarUmTorneio(int id) throws SQLException {
        String sql = "SELECT * from Torneio WHERE id=?;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, id);
        ResultSet rs = ps.executeQuery();

        Torneio torneio = null;

        if(rs.next()){
            Integer idTorneio = rs.getInt("id");
            String etapa = rs.getString("etapa");
            String local = rs.getString("local");

            torneio = new Torneio(idTorneio, etapa, local);
        }
        return torneio;
    }

    public void listar() throws SQLException {
        String sql = "SELECT * from Torneio;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        while(rs.next()) {
            System.out.println("\n Codigo do Torneio : "+rs.getObject("id"));
            System.out.println("Etapa do Torneio : "+rs.getObject("etapa"));
            System.out.println("Local: "+rs.getObject("local"));
        }
    }

    public void deletarTorneio(int id) throws SQLException {
        String sql = "DELETE from Torneio WHERE id=?;";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, id);
        ps.execute();
        ps.close();
    }

    public void alterarLocalTorneio(int id, String local) throws SQLException {
        String sql = "UPDATE Torneio SET local=? WHERE id=?;";
        PreparedStatement ps = conn.prepareStatement(sql);

        ps.setString(1, local);
        ps.setInt(2, id);

        ps.executeUpdate();
        ps.close();
    }
}
