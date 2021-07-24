importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//乌云
function OnAdd(fightsystem, self, buff, fv, timer)
{    
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
	ThunderDamage = 7;
    ParalysisTime = 350;
    ThunderDamage = ThunderDamage*0.01*self.MaxHP;
    var BuffCap = fightsystem.GetBuff(self,11831);
	//判断是否有无敌BUFF
	var Buff1 = fightsystem.GetBuff(self,11832);
	var Buff2 = fightsystem.GetBuff(self,11901);
	if((Buff1 != null)||(Buff2 != null))
	{
		return UserSkillReturn.SKILL_LOSE;
	}
    else if(BuffCap != null)
    {
		
        ThunderDamage = ThunderDamage/5;
        self.ShieldDamage += ThunderDamage;
        fv.SelfShield -= ThunderDamage;
    }
    else
    {
        //buff伤害
        if(self.DecDamage < 100)
        {
            var BuffDongJie = fightsystem.GetBuff(self,11802);
            if(BuffDongJie == null)
            {
                ThunderDamage = ThunderDamage*(100-self.DecDamage)*0.01;
            }
            else
            {
                ThunderDamage = ThunderDamage*(0-self.DecDamage)*0.01;
            }
        }
        fightsystem.Damage(self,ThunderDamage,fv,timer);
        var BuffDizzy = fightsystem.GetBuff(self,11813);
        if(BuffDizzy != null)   
        {
            fightsystem.RemoveBuff(self,11813,timer,fv);
        }
        var InitBuff = fightsystem.GetBuff(self,8888);
        if(InitBuff != null)
        {
            if(InitBuff.SaveData%1000/100 < 4)
            {
                fightsystem.ChangeNextAtkTime(self,ParalysisTime);
                var BuffParalysis = fightsystem.GetBuff(self,11801);
                if(BuffParalysis == null)
                {
                    fightsystem.AddBuff(self,11801,timer,fv);
                }
            }
        }
        fv.SelfLastDamage = ThunderDamage;
    }
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
}