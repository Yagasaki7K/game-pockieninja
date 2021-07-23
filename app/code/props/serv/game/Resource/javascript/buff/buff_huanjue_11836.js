importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//幻觉
function OnAdd(fightsystem,self, buff, fv,timer)
{
}

function OnActivation(fightsystem,self, buff, fv,timer)
{
    var DrainHP = 0;
    var DrainMP = 0;
    if(self.DecDamage < 100)//免伤
    {
        var BuffDongJie = fightsystem.GetBuff(self,11802);
        if(BuffDongJie == null)
        {
            DrainHP = buff.SaveData*self.MaxHP*(100 - self.DecDamage)*0.0001;
            DrainMP = buff.SaveData1*self.MaxMP*(100 - self.DecDamage)*0.0001;
        }
        else
        {
            DrainHP = buff.SaveData*self.MaxHP*(0 - self.DecDamage)*0.0001;
            DrainMP = buff.SaveData1*self.MaxMP*(0 - self.DecDamage)*0.0001;
        }           
    }
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
}

function OnRemove(fightsystem,self, buff, fv,timer)
{ 
}
