importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//流血
function OnAdd(fightsystem,self, buff, fv,timer)
{
    buff.LifeTime = buff.SaveData;
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
    var script_damage = self.HP*0.1;        
    fightsystem.Damage(self, script_damage); 
    fv.SelfLastDamage = script_damage;
}

function OnRemove(fightsystem,self, buff, fv,timer)
{

}
