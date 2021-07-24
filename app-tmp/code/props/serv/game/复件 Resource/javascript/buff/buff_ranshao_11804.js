importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//燃烧，被酒火触发，被水清除
function OnAdd(fightsystem, self, buff, fv, timer)
{
    //持续时间已赋初值到SaveData1，烧几次
    var BuffZaiShengGuangHuan0 = fightsystem.GetBuff(self,11861);
    var BuffZaiShengGuangHuan1 = fightsystem.GetBuff(self,11862);
    var BuffZaiShengGuangHuan2 = fightsystem.GetBuff(self,11863);
    if(BuffZaiShengGuangHuan0 != null)
    {
        buff.SaveData1 = LogicTool.ToInt(buff.SaveData1*(100-BuffZaiShengGuangHuan0.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    else if(BuffZaiShengGuangHuan1 != null)
    {
        buff.SaveData1 = LogicTool.ToInt(buff.SaveData1*(100-BuffZaiShengGuangHuan1.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    else if(BuffZaiShengGuangHuan2 != null)
    {
        buff.SaveData1 = LogicTool.ToInt(buff.SaveData1*(100-BuffZaiShengGuangHuan2.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    } 
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    //伤害在添加buff时就已传入SaveData了
    var FlameDamage = buff.SaveData;
    fightsystem.Damage(self, FlameDamage, fv, timer); 
    fv.SelfLastDamage = FlameDamage;
    buff.SaveData1 -= 1;
    if(buff.SaveData1 < 1)
    {
        buff.LifeTime = 0;
    }
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}