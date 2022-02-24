PROGRAM HelloFriend(INPUT, OUTPUT);
USES DOS;
VAR
  Query, Name, Check: STRING;
  I: INTEGER;
BEGIN
  WRITELN('Content-Type: text/html');
  WRITELN;
  Query := GetEnv('QUERY_STRING');
  IF (Length(Query) > 0)
  THEN
    BEGIN
      Check := Copy(Query, 1, 5);
      IF Check = 'name='
      THEN 
        BEGIN
          I := Length(Query) - POS('=', Query); 
          Name := Copy(Query, 6, I);
          IF Length(Name) > 0
          THEN
            WRITELN('Hello Dear, ', Name, '!')
          ELSE
            WRITELN('Hello Anonymous!')  
        END
      ELSE
        WRITELN('Hello Anonymous!')
    END
  ELSE
    WRITELN('Hello Anonymous!')
END.