importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//黏土炸弹
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = buff.SaveData;
    var BuffZaiShengGuangHuan0 = fightsystem.GetBuff(self,11861);
    var BuffZaiShengGuangHuan1 = fightsystem.GetBuff(self,11862);
    var BuffZaiShengGuangHuan2 = fightsystem.GetBuff(self,11863);
    if(BuffZaiShengGuangHuan0 != null)
    {
        buff.LifeTime = LogicTool.ToInt(buff.LifeTime*(100-BuffZaiShengGuangHuan0.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    else if(BuffZaiShengGuangHuan1 != null)
    {
        buff.LifeTime = LogicTool.ToInt(buff.LifeTime*(100-BuffZaiShengGuangHuan1.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    else if(BuffZaiShengGuangHuan2 != null)
    {
        buff.LifeTime = LogicTool.ToInt(buff.LifeTime*(100-BuffZaiShengGuangHuan2.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    buff.SaveData1 = timer;
    buff.SaveData = self.HP;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    if(!(timer < buff.SaveData1+buff.LifeTime))
    {
        var BombDamage = buff.SaveData - self.HP;
        if(BombDamage < 1)
            BombDamage = 1;        
        fightsystem.Damage(self, BombDamage, fv, timer);         
        fv.SelfLastDamage = BombDamage;
        fightsystem.RemoveBuff(self,11820,timer,fv);
    }
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
}