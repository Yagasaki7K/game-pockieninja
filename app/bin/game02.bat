d:
cd D:\app\bin
C:\"Program Files"\Java\jdk1.6.0_20\bin\java -XX:+ForceTimeHighResolution -server -Dcom.d2.props=/game02.properties -Dcom.d2.service.instance=game02 -Dfile.encoding=UTF-8 -cp config;..\code;..\code\lib\* com.d2.serv.game.Kernel.Kernel.Main