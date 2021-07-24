importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//缠绕
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    buff.LifeTime = buff.SaveData;
    self.CanMove -= 1;
    fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd-99);
    self.CounterMul -= 999;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
	var script_damage = self.MaxHP*0.05;        
    fightsystem.Damage(self, script_damage); 
    fv.SelfLastDamage = script_damage;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.CanMove += 1;
    fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd+99);
    self.CounterMul += 999;
}