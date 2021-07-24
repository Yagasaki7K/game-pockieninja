importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//BUFF被添加的时候
function OnAdd(fightsystem,self, buff, fv,timer)
{
    //刷新一次攻击
    self.MinAtk = self.MinAtk + 50;
    self.MaxAtk = self.MaxAtk + 50;
}

//BUFF每次被激发的时候
function OnActivation(fightsystem,self, buff, fv,timer)
{
}

//BUFF被去除的时候
function OnRemove(fightsystem,self, buff, fv,timer)
{
    //刷掉
    self.MinAtk = self.MinAtk - 50;
    self.MaxAtk = self.MaxAtk - 50;
}