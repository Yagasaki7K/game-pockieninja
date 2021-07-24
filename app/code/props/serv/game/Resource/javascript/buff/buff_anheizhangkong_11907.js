importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//暗黑掌控
function OnAdd(fightsystem,self, buff, fv,timer)
{
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
    var DrainHP = self.HP*0.15;
    var DrainMP = self.HP*0.15;         
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        DrainMP = DrainMP*2;
    }
    if(DrainHP > self.HP)
    {
        DrainHP = self.HP;
    }
    if(DrainMP > self.MP)
    {
        DrainMP = self.MP;
    }
    self.HP -= LogicTool.ToInt(DrainHP);
    self.MP -= LogicTool.ToInt(DrainMP);
    fv.SelfLastDamage = DrainHP;
    fv.DecMP = DrainMP;
    buff.LifeTime = 0;   
}

function OnRemove(fightsystem,self, buff, fv,timer)
{ 
}
