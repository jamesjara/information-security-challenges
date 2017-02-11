class Main
{
  public static void main(String arg[])
  {
    
      String clss = arg[0];
      Class cmdClass = Class.forName(clss);
      Animal animal = (Animal) cmdClass.newInstance(); 
    
}
}
