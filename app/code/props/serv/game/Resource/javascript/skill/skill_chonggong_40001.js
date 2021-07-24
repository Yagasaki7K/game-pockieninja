importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物普攻
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BuffPeg = fightsystem.GetBuff(target,11840);
    var AttackDamage = fightsystem.GetDamage(self)*0.75;
    var BuffParry = fightsystem.GetBuff(target,11841);
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    if((fv.IsHit == 1)&&(BuffPeg == null))
    {
        //寒冰呼吸
        var BuffHanBingHuXi = fightsystem.GetBuff(self, 11879);
        if((BuffHanBingHuXi != null)&&(LogicTool.RandInt(0, 99) < BuffHanBingHuXi.SaveData))
        {
            var BreakBonus = 200;
            BreakBonus = BreakBonus * (1+0.01*LogicTool.ToInt(self.SkillAdd1*0.01));
            //检查重复状态
            var BuffFreeze = fightsystem.GetBuff(target,11802);
            if(BuffFreeze != null)
            {          
                fightsystem.RemoveBuff(target,11802,timer,fv);
            }
            //清燃烧
            var BuffFlame = fightsystem.GetBuff(target,11804);
            if(BuffFlame != null)
            {
                fightsystem.RemoveBuff(target,11804,timer,fv);
            }
            //清热血
            var BuffWarmBlooded = fightsystem.GetBuff(target,11814);
            if(BuffWarmBlooded != null)
            {
                fightsystem.RemoveBuff(target,11814,timer,fv);
            }
            fightsystem.AddBuff(target,11802,timer,fv,BreakBonus,0);
            //把格挡保存下来
            if(BuffParry != null)
            {
                fightsystem.AddBuff(target,11841,timer,fv);
            }
        }
    }
    return UserSkillReturn.SKILL_SUCCESS;
}