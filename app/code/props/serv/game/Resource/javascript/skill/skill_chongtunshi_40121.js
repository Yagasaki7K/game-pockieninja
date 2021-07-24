importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//吞噬（吞噬敌人的10%的查克拉并恢复相同的量，同时减少对方20%攻击力8秒。会吞噬到敌人的中毒、醉酒、尸鬼封禁效果）
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	if(target.MP == 0)
    {     
        return UserSkillReturn.SKILL_LOSE;
    }
	else
    {
        var MPDraw = 10;
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
		//检查buff（静电结界 原中毒）
		var buff1 = fightsystem.GetBuff(target,11831);
    	if(buff1 != null)
        {
            fightsystem.RemoveBuff(target,11831,timer,fv);
			return UserSkillReturn.SKILL_SUCCESS;
        }
		//检查buff（热血 原醉酒）
		var buff2 = fightsystem.GetBuff(target,11814);
    	if(buff2 != null)
        {
            fightsystem.RemoveBuff(target,11814,timer,fv);
			return UserSkillReturn.SKILL_SUCCESS;
        }	
		//检查buff阴愈伤灭 原（尸鬼封禁）
		var buff3 = fightsystem.GetBuff(target,11834);
    	if(buff3 != null)
        {
            fightsystem.RemoveBuff(target,11834,timer,fv);
			return UserSkillReturn.SKILL_SUCCESS;
        }
		//检查buff是否重复（吞噬）
		var buff4 = fightsystem.GetBuff(target,11897);
    	if(buff4 == null)
        {
            fightsystem.AddBuff(target,11897,timer,fv);
			return UserSkillReturn.SKILL_SUCCESS;
        }
    return UserSkillReturn.SKILL_SUCCESS;
	}
	return UserSkillReturn.SKILL_SUCCESS;
}