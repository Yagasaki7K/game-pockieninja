importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//BUFF被添加的时候
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.ShieldDamage = 100;
    self.ShieldCount = 2;
}

//BUFF每次被激发的时候
function OnActivation(fightsystem,self, buff, fv,timer)
{
}

//BUFF被去除的时候
function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.ShieldDamage = 0;
    self.ShieldCount = 0;
}