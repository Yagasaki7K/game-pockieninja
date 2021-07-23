importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//BUFF被添加的时候
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.CanAttack = 0;
}

//BUFF每次被激发的时候
function OnActivation(fightsystem,self, buff, fv,timer)
{
    fightsystem.Damage(self,10);
    fv.Damage = 10;
    fv.SelfLastDamage = 10;
}

//BUFF被去除的时候
function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.CanAttack = 1;
}