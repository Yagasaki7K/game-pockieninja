importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//BUFF被添加的时候
function OnAdd(fightsystem,self, buff, fv,timer)
{
    //刷新一次攻击并保存刷新数值
    var script_m = (1 - self.HP/self.MaxHP)*10;
    self.MinAtk = self.MinAtk + script_m;
    self.MaxAtk = self.MaxAtk + script_m;
    buff.SaveData = script_m;
}

//BUFF每次被激发的时候
function OnActivation(fightsystem,self, buff, fv,timer)
{
}

//BUFF被去除的时候
function OnRemove(fightsystem,self, buff, fv,timer)
{
    //刷掉
    self.MinAtk = self.MinAtk - buff.SaveData;
    self.MaxAtk = self.MaxAtk - buff.SaveData;
}