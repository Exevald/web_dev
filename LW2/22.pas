PROGRAM PrintHello(INPUT, OUTPUT);
USES
  DOS;
VAR
  Str: STRING;
BEGIN {PrintHello}
  WRITELN('Content-Type: text/html');
  WRITELN;
  Str := GetEnv('QUERY_STRING');
  WRITELN(Str);
  IF Str = 'lanterns=1'
  THEN
    WRITELN('British are coming by land')
  ELSE
    IF Str = 'lanterns=2'
    THEN
      WRITELN('British are coming by sea')
    ELSE
      WRITELN('Sarah did not say')	 
END. {PrintHello}
