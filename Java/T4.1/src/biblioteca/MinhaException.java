package biblioteca;

public class MinhaException extends Exception {

	private String msg;
    public MinhaException(String msg){
      super(msg);
      this.msg = msg;
    }
    @Override
    public String getMessage(){
      return msg;
    }
}
