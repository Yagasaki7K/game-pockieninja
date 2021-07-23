importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//激怒
function OnAdd(fightsystem,self, buff, fv,timer)
{
    self.CanUserSkill = 0;
    buff.SaveData = self.DodgeMul;
    self.DodgeMul = 0;
    buff.SaveData1 = self.PriorityMul;
    self.PriorityMul = 0;
    self.AtkTime = self.AtkTime - 5;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
}

function OnRemove(fightsystem,self, buff, fv,timer)
{
    self.CanUserSkill = 1;
    self.DodgeMul = buff.SaveData;
    self.PriorityMul = buff.SaveData1;
    self.AtkTime = self.AtkTime + 5;
}