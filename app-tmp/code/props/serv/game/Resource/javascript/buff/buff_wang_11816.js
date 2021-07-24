importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//网，降低闪避率，攻击更容易被看穿
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd-buff.SaveData);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd+buff.SaveData);
}