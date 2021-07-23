importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//中毒，6000秒，直到被治疗清除
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = 6000;
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
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    
    var script_damage = 0;
    if(self.DecDamage < 100)
    {
        var BuffDongJie = fightsystem.GetBuff(self,11802);
        if(BuffDongJie == null)
        {
            script_damage = self.MaxHP*0.0003*(100 - self.DecDamage);
        }
        else
        {
            script_damage = self.MaxHP*0.0003*(0 - self.DecDamage);
        }
    }    
    fightsystem.Damage(self,script_damage,fv,timer);
    fv.SelfLastDamage = script_damage;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}