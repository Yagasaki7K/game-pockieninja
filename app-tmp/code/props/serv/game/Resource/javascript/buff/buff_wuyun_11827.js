importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//乌云
function OnAdd(fightsystem, self, buff, fv, timer)
{    
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    var ThunderDamage = 0;
    var ParalysisTime = 0;
    switch(buff.SaveData)
    {
        case 1: 
        {
            ThunderDamage = 7;
            ParalysisTime = 350;
            break;
        }
        case 2: 
        {
            ThunderDamage = 8;
            ParalysisTime = 350;
            break;
        } 
        case 3: 
        {
            ThunderDamage = 9;
            ParalysisTime = 1.227;
            break;
        } 
        case 4: 
        {
            ThunderDamage = 0.68;
            ParalysisTime = 1.314;
            break;
        } 
        case 5: 
        {
            ThunderDamage = 0.73;
            ParalysisTime = 1.391;
            break;
        }
        case 6: 
        {
            ThunderDamage = 0.77;
            ParalysisTime = 1.465;
            break;
        }
        case 7: 
        {
            ThunderDamage = 0.81;
            ParalysisTime = 1.533;
            break;
        } 
        case 8: 
        {
            ThunderDamage = 0.85;
            ParalysisTime = 1.597;
            break;
        }
        case 9: 
        {
            ThunderDamage = 0.9;
            ParalysisTime = 1.656;
            break;
        } 
        case 10: 
        {
            ThunderDamage = 0.94;
            ParalysisTime = 1.709;
            break;
        }
        case 11: 
        {
            ThunderDamage = 0.98;
            ParalysisTime = 1.762;
            break;
        }   
        case 12: 
        {
            ThunderDamage = 1.03;
            ParalysisTime = 1.81;
            break;
        }
        case 13: 
        {
            ThunderDamage = 140;
            ParalysisTime = 1.856;
            break;
        }
        default: ;
    }
    ThunderDamage = ThunderDamage*0.01*self.MaxHP;
    var BuffCap = fightsystem.GetBuff(self,11831);
    if(BuffCap != null)
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