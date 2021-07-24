importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//冻结，无法行动，但受到的伤害减少
function OnAdd(fightsystem,self, buff, fv,timer)
{
    //buff.SaveData保存了破冰一击的伤害倍数
    self.CanMove -= 1;
    fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd-9999);
    self.DecDamage -= buff.SaveData-100;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.CanMove += 1;
    fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd+9999);
    self.DecDamage += buff.SaveData-100;
}