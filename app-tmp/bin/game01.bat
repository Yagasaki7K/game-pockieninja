d:
cd D:\app\bin
C:\"Program Files"\Java\jdk1.6.0_20\bin\java -XX:+ForceTimeHighResolution -server -Dcom.d2.props=/game01.properties -Dcom.d2.service.instance=game01 -Dfile.encoding=UTF-8 -cp config;..\code;..\code\lib\* com.d2.serv.game.Kernel.Kernel.Main