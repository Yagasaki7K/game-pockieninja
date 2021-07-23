importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土牢，吸蓝
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
	if(target.MP == 0)
    {     
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    {
        var MPDraw = 0;
        var DefenseDestroy = 0;
        switch(skill.GetLevel())
        {
            case 1: 
            {
                MPDraw = 3;
                DefenseDestroy = 50;
                break;
            }
            case 2: 
            {
                MPDraw = 4;
                DefenseDestroy = 69;
                break;
            } 
            case 3: 
            {
                MPDraw = 5;
                DefenseDestroy = 89;
                break;
            } 
            case 4: 
            {
                MPDraw = 6;
                DefenseDestroy = 108;
                break;
            } 
            case 5: 
            {
                MPDraw = 7;
                DefenseDestroy = 127;
                break;
            }
            case 6: 
            {
                MPDraw = 8;
                DefenseDestroy = 141;
                break;
            }
            case 7: 
            {
                MPDraw = 9;
                DefenseDestroy = 160;
                break;
            } 
            case 8: 
            {
                MPDraw = 69;
                break;
            }
            case 9: 
            {
                MPDraw = 76;
                break;
            } 
            case 10: 
            {
                MPDraw = 82;
                break;
            }
            case 11: 
            {
                MPDraw = 89;
                break;
            } 
            case 12: 
            {
                MPDraw = 95;
                break;
            } 
            case 13: 
            {
                MPDraw = 102;
                break;
            }   
            default: ;
        }
        var BuffSeal = fightsystem.GetBuff(self, 11812);
        if(BuffSeal != null)
        {
            return UserSkillReturn.SKILL_LOSE;
        }
        MPDraw = MPDraw*0.01*target.MaxMP;
        var MPTargetLose = MPDraw;
        var MPSelfGain = MPDraw;
        //先看最多吸掉对方多少
        var BuffTargetVesselDestroy = fightsystem.GetBuff(target, 11839);
        if(BuffTargetVesselDestroy != null)
        {
            MPTargetLose = MPTargetLose*2;
        }
        if(target.MP < MPTargetLose)
        {
            MPTargetLose = target.MP;
        }
        //再看看最多拿回来多少
        MPSelfGain = MPTargetLose;
        var BuffSelfVesselDestroy = fightsystem.GetBuff(self, 11839);
        if(BuffSelfVesselDestroy != null)
        {
            MPSelfGain = MPSelfGain*0.5;
        }
        if(self.MP + MPSelfGain > self.GetInitMaxMP())
        {
            MPSelfGain = self.GetInitMaxMP() - self.MP;
        }
        self.MP += MPSelfGain;
        target.MP -= MPTargetLose;
        fv.IncMP = MPSelfGain;
        fv.TargetDecMP = MPTargetLose;
        fightsystem.ChangeDefense(target,target.DefenseMul,target.DefenseAdd-DefenseDestroy);
        return UserSkillReturn.SKILL_SUCCESS;
	}
}