importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//护盾，吸收雷电伤害转化为盾数值（雷伤害检查buff加盾数值）
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.ShieldDamage = buff.SaveData;
    self.ShieldCount = 999;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.ShieldDamage = 0;
    self.ShieldCount = 0;
}
