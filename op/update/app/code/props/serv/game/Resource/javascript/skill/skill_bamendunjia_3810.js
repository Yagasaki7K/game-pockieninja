importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//八门遁甲
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
        var FirstDoor = fightsystem.GetBuff(self,11819);
        if(FirstDoor != null)
        {
            if(!(timer - FirstDoor.SaveData < DoorTime))
            {
                fightsystem.RemoveBuff(self,11819,timer,fv);
                fightsystem.AddBuff(self,11844,timer,fv,timer,0);
            }
            else
            {
                return UserSkillReturn.SKILL_LOSE;
            }
        }
        else
        {
            var SecondDoor = fightsystem.GetBuff(self,11844);
            if(SecondDoor != null)
            {
                if(!(timer - SecondDoor.SaveData < DoorTime))
                {
                    fightsystem.RemoveBuff(self,11844,timer,fv);
                    fightsystem.AddBuff(self,11845,timer,fv,timer,0);
                }
                else
                {
                    return UserSkillReturn.SKILL_LOSE;
                }
            }
            else
            {
                var ThirdDoor = fightsystem.GetBuff(self,11845);
                if(ThirdDoor != null)
                {
                    if(!(timer - ThirdDoor.SaveData < DoorTime))
                    {
                        fightsystem.RemoveBuff(self,11845,timer,fv);
                        fightsystem.AddBuff(self,11846,timer,fv,timer,0);
                    }
                    else
                    {
                        return UserSkillReturn.SKILL_LOSE;
                    }
                }
                else
                {
                    var ForthDoor = fightsystem.GetBuff(self,11846);
                    if(ForthDoor != null)
                    {
                        if(!(timer - ForthDoor.SaveData < DoorTime))
                        {
                            fightsystem.RemoveBuff(self,11846,timer,fv);
                            fightsystem.AddBuff(self,11847,timer,fv,timer,0);
                        }
                        else
                        {
                            return UserSkillReturn.SKILL_LOSE;
                        }
                    }
                    else
                    {
                        var FifthDoor = fightsystem.GetBuff(self,11847);
                        if(FifthDoor != null)
                        {
                            if(!(timer - FifthDoor.SaveData < DoorTime))
                            {
                                fightsystem.RemoveBuff(self,11847,timer,fv);
                                fightsystem.AddBuff(self,11848,timer,fv,timer,0);
                            }
                            else
                            {
                                return UserSkillReturn.SKILL_LOSE;
                            }
                        }
                        else
                        {
                            var SixthDoor = fightsystem.GetBuff(self,11848);
                            if(SixthDoor != null)
                            {
                                if(!(timer - SixthDoor.SaveData < DoorTime))
                                {
                                    fightsystem.RemoveBuff(self,11848,timer,fv);
                                    fightsystem.AddBuff(self,11849,timer,fv,timer,0);
                                }
                                else
                                {
                                    return UserSkillReturn.SKILL_LOSE;
                                }
                            }
                            else
                            {
                                var SeventhDoor = fightsystem.GetBuff(self,11849);
                                if(SeventhDoor != null)
                                {
                                    if(!(timer - SeventhDoor.SaveData < DoorTime))
                                    {
                                        fightsystem.RemoveBuff(self,11849,timer,fv);
                                        fightsystem.AddBuff(self,11850,timer,fv,1000,0);
                                    }
                                    else
                                    {
                                        return UserSkillReturn.SKILL_LOSE;
                                    }
                                }
                                else
                                {
                                    var eighthDoor = fightsystem.GetBuff(self,11850);
                                    if(eighthDoor != null)
                                    {
                                        return UserSkillReturn.SKILL_LOSE;
                                    }
                                    else
                                    { 
                                        fightsystem.AddBuff(self,11819,timer,fv,timer,0);
                                        var BuffKangFeng = fightsystem.GetBuff(self,11880);
                                        if(BuffKangFeng == null)
                                        {
                                            //判断是否有亢奋+任意一个级别的杀戮光环
                                            var BuffShaLuGuangHuan0 = fightsystem.GetBuff(self,11853);
                                            var BuffShaLuGuangHuan1 = fightsystem.GetBuff(self,11854);
                                            var BuffShaLuGuangHuan2 = fightsystem.GetBuff(self,11855);
                                            if((BuffShaLuGuangHuan0 != null)&&(BuffShaLuGuangHuan0.SaveData != 0))
                                            {
                                                fightsystem.AddBuff(self,11880,timer,fv,999999,BuffShaLuGuangHuan0.SaveData);
                                            }
                                            else if((BuffShaLuGuangHuan1 != null)&&(BuffShaLuGuangHuan1.SaveData != 0))
                                            {
                                                fightsystem.AddBuff(self,11880,timer,fv,999999,BuffShaLuGuangHuan1.SaveData);
                                            }
                                            else if((BuffShaLuGuangHuan2 != null)&&(BuffShaLuGuangHuan2.SaveData != 0))
                                            {
                                                fightsystem.AddBuff(self,11880,timer,fv,999999,BuffShaLuGuangHuan2.SaveData);
                                            }
                                        }
                                        else
                                        {
                                            BuffKangFeng.SaveData = 999999;
                                        }
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