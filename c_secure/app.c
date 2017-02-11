#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// a > 97
// A < 97
// #define UPPER(c) (((c)>='a')?(c)-('a'-'A'):(c)) 


// IS UPPER CASE
// #define UPPER(c) (((c)>='a')?(c)-('a'-'A'):(c))
#define UPPER(c) (((c)>='a' && (c)<='z')? (c-32) :(c)) 


int id_check (char* id, char* correct_id)
{
  char d;
  char u1;
  char u2;
  int i;
  
  if (strlen(id) != strlen(correct_id)){
    return -1;
  }
  for (i = 0; i < strlen(id); i++){
    u1 = UPPER (id[i]);
    u2 = UPPER (correct_id[i]);

    d = u1 - u2;
    if (d > 0){
      return 1;
    }
    if (d < 0){
      return -1;
    }
  }

  return 0;
}



int main() { 
    char *a = "bbbzzzaaa";
    char *b = "BBBzzzaaa";
    printf("%d", id_check(a,b));
}
