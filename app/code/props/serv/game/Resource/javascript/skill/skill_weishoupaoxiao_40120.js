importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//尾兽咆哮
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var DoorTime = 0;
    var BackDamage = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            DoorTime = 1000;
            BackDamage = 0;
            break;
        }
        case 2: 
        {
            DoorTime = 1000;
            BackDamage = 0;
            break;
        } 
        case 3: 
        {
            DoorTime = 7.669;
            BackDamage = 22;
            break;
        } 
        case 4: 
        {
            DoorTime = 8.21;
            BackDamage = 27;
            break;
        } 
        case 5: 
        {
            DoorTime = 8.696;
            BackDamage = 31;
            break;
        }
        case 6: 
        {
            DoorTime = 9.158;
            BackDamage = 35;
            break;
        }
        case 7: 
        {
            DoorTime = 9.579;
            BackDamage = 39;
            break;
        } 
        case 8: 
        {
            DoorTime = 9.98;
            BackDamage = 43;
            break;
        }
        case 9: 
        {
            DoorTime = 10.352;
            BackDamage = 48;
            break;
        } 
        case 10: 
        {
            DoorTime = 10.684;
            BackDamage = 52;
            break;
        }
        case 11: 
        {
            DoorTime = 11.013;
            BackDamage = 56;
            break;
        } 
        case 12: 
        {
            DoorTime = 11.312;
            BackDamage = 60;
            break;
        } 
        case 13: 
        {
            DoorTime = 11.601;
            BackDamage = 64;
            break;
        }    
        default: ;
    }
    DoorTime = DoorTime / (1+0.01*LogicTool.ToInt(self.SkillAdd5*0.01));
    if (self.HP > 0)
    {
        var FirstDoor = fightsystem.GetBuff(self,11889);
        if(FirstDoor != null)
        {
            if(!(timer - FirstDoor.SaveData < DoorTime))
            {
                fightsystem.RemoveBuff(self,11889,timer,fv);
                fightsystem.AddBuff(self,11890,timer,fv,timer,0);
            }
            else
            {
                return UserSkillReturn.SKILL_LOSE;
            }
        }
        else
        {
            var SecondDoor = fightsystem.GetBuff(self,11890);
            if(SecondDoor != null)
            {
                if(!(timer - SecondDoor.SaveData < DoorTime))
                {
                    fightsystem.RemoveBuff(self,11890,timer,fv);
                    fightsystem.AddBuff(self,11891,timer,fv,timer,0);
                }
                else
                {
                    return UserSkillReturn.SKILL_LOSE;
                }
            }
            else
            {
                var ThirdDoor = fightsystem.GetBuff(self,11891);
                if(ThirdDoor != null)
                {
                    if(!(timer - ThirdDoor.SaveData < DoorTime))
                    {
                        fightsystem.RemoveBuff(self,11891,timer,fv);
                        fightsystem.AddBuff(self,11892,timer,fv,timer,0);
                    }
                    else
                    {
                        return UserSkillReturn.SKILL_LOSE;
                    }
                }
                else
                {
                    var ForthDoor = fightsystem.GetBuff(self,11892);
                    if(ForthDoor != null)
                    {
                        if(!(timer - ForthDoor.SaveData < DoorTime))
                        {
                            fightsystem.RemoveBuff(self,11892,timer,fv);
                            fightsystem.AddBuff(self,11893,timer,fv,timer,0);
                        }
                        else
                        {
                            return UserSkillReturn.SKILL_LOSE;
                        }
                    }
                    else
                    {
                        var FifthDoor = fightsystem.GetBuff(self,11893);
                        if(FifthDoor != null)
                        {
                            if(!(timer - FifthDoor.SaveData < DoorTime))
                            {
                                fightsystem.RemoveBuff(self,11893,timer,fv);
                                fightsystem.AddBuff(self,11894,timer,fv,timer,0);
                            }
                            else
                            {
                                return UserSkillReturn.SKILL_LOSE;
                            }
                        }
                        else
                        {
                            var SixthDoor = fightsystem.GetBuff(self,11894);
                            if(SixthDoor != null)
                            {
                                if(!(timer - SixthDoor.SaveData < DoorTime))
                                {
                                    fightsystem.RemoveBuff(self,11894,timer,fv);
                                    fightsystem.AddBuff(self,11895,timer,fv,timer,0);
                                }
                                else
                                {
                                    return UserSkillReturn.SKILL_LOSE;
                                }
                            }
                            else
                            {
                                var SeventhDoor = fightsystem.GetBuff(self,11895);
                                if(SeventhDoor != null)
                                {
                                    if(!(timer - SeventhDoor.SaveData < DoorTime))
                                    {
                                        fightsystem.RemoveBuff(self,11895,timer,fv);
                                        fightsystem.AddBuff(self,11896,timer,fv,1000,0);
                                    }
                                    else
                                    {
                                        return UserSkillReturn.SKILL_LOSE;
                                    }
                                }
                                else
                                {
                                    var eighthDoor = fightsystem.GetBuff(self,11896);
                                    if(eighthDoor != null)
                                    {
                                        return UserSkillReturn.SKILL_LOSE;
                                    }
                                    else
                                    { 
                                        fightsystem.AddBuff(self,11889,timer,fv,timer,0);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
    else
        return UserSkillReturn.SKILL_LOSE;
}