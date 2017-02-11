class Dogy2 implements Animal
{
  public void say()
  {

FileInputStream inputStream = new FileInputStream("foo.txt");
try {
    String everything = IOUtils.toString(inputStream);

      System.out.println( everything );
} finally {
    inputStream.close();
}

  }
}
