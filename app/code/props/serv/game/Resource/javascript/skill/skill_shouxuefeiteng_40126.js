importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//兽血沸腾（依附尾兽光环才能生效，在查克拉小于上限的10%时，将光环转换为相当于查克拉上限的一定百分比并驱散身上所有异常状态，基础光环20%，高级光环25%，专家光环30%)
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var BuffChongGaoGuangHuan0 = fightsystem.GetBuff(self,11898);
    var BuffChongGaoGuangHuan1 = fightsystem.GetBuff(self,11899);
    var BuffChongGaoGuangHuan2 = fightsystem.GetBuff(self,11900);
	var MPLast = self.MP;
	var MPRecover = 0;
	//记录所有DEBUFF
	    var ClearBuff1 = fightsystem.GetBuff(self,1212);
		var ClearBuff2 = fightsystem.GetBuff(self,11801);
		var ClearBuff3 = fightsystem.GetBuff(self,11802);
		var ClearBuff4 = fightsystem.GetBuff(self,11803);
		var ClearBuff5 = fightsystem.GetBuff(self,11804);
		var ClearBuff6 = fightsystem.GetBuff(self,11805);
		var ClearBuff7 = fightsystem.GetBuff(self,11806);
		var ClearBuff8 = fightsystem.GetBuff(self,11807);
		var ClearBuff9 = fightsystem.GetBuff(self,11808);
		var ClearBuff10 = fightsystem.GetBuff(self,11810);
		var ClearBuff11 = fightsystem.GetBuff(self,11811);
		var ClearBuff12 = fightsystem.GetBuff(self,11812);
		var ClearBuff13 = fightsystem.GetBuff(self,11813);
		var ClearBuff14 = fightsystem.GetBuff(self,11815);
		var ClearBuff15 = fightsystem.GetBuff(self,11816);
		var ClearBuff16 = fightsystem.GetBuff(self,11820);
		var ClearBuff17 = fightsystem.GetBuff(self,11821);
		var ClearBuff18 = fightsystem.GetBuff(self,11826);
		var ClearBuff19 = fightsystem.GetBuff(self,11827);
		var ClearBuff20 = fightsystem.GetBuff(self,11828);
		var ClearBuff21 = fightsystem.GetBuff(self,11829);
		var ClearBuff22 = fightsystem.GetBuff(self,11830);
		var ClearBuff23 = fightsystem.GetBuff(self,11833);
		var ClearBuff24 = fightsystem.GetBuff(self,11835);
		var ClearBuff25 = fightsystem.GetBuff(self,11836);
		var ClearBuff26 = fightsystem.GetBuff(self,11837);
		var ClearBuff27 = fightsystem.GetBuff(self,11838);
		var ClearBuff28 = fightsystem.GetBuff(self,11839);
		var ClearBuff29 = fightsystem.GetBuff(self,11843);
		var ClearBuff30 = fightsystem.GetBuff(self,11882);
		var ClearBuff31 = fightsystem.GetBuff(self,11884);
		var ClearBuff32 = fightsystem.GetBuff(self,11885);
		var ClearBuff33 = fightsystem.GetBuff(self,11886);
		var ClearBuff34 = fightsystem.GetBuff(self,11897);
		var ClearBuff35 = fightsystem.GetBuff(self,11903);
		var ClearBuff36 = fightsystem.GetBuff(self,11904);
		var ClearBuff37 = fightsystem.GetBuff(self,11908);
		var ClearBuff38 = fightsystem.GetBuff(self,11909);
		
	//技能触发条件判断
		if((BuffChongGaoGuangHuan0 != null)&&(self.GetInitMaxMP()*0.1>MPLast)&&(LogicTool.RandInt(0, 99) < 30))
    	{
			MPRecover = 20;
			self.MP += MPRecover*0.01*self.GetInitMaxMP();
			fv.IncMP = self.MP;
			//检查buff
    		if((ClearBuff1 != null)||(ClearBuff2 != null)||(ClearBuff3 != null)||(ClearBuff4 != null)||(ClearBuff5 != null)||(ClearBuff6 != null)||(ClearBuff7 != null)||(ClearBuff8 != null)||(ClearBuff9 != null)||(ClearBuff10 != null)||(ClearBuff11 != null)||(ClearBuff12 != null)||(ClearBuff13 != null)||(ClearBuff14 != null)||(ClearBuff15 != null)||(ClearBuff16 != null)||(ClearBuff17 != null)||(ClearBuff18 != null) ||(ClearBuff19 != null)||(ClearBuff20 != null)||(ClearBuff21 != null)||(ClearBuff22 != null)||(ClearBuff23 != null)||(ClearBuff24 != null)||(ClearBuff25 != null)||(ClearBuff26 != null)||(ClearBuff27 != null)||(ClearBuff28 != null)||(ClearBuff29 != null)||(ClearBuff30 != null)||(ClearBuff31 != null)||(ClearBuff32 != null)||(ClearBuff33 != null)||(ClearBuff34 != null)||(ClearBuff35 != null)||(ClearBuff36 != null)||(ClearBuff37 != null)||(ClearBuff38 != null))
    		{
        		fightsystem.RemoveBuff(self,1212,timer,fv);  
        		fightsystem.RemoveBuff(self,11801,timer,fv);  
        		fightsystem.RemoveBuff(self,11802,timer,fv); 
        		fightsystem.RemoveBuff(self,11803,timer,fv);  
        		fightsystem.RemoveBuff(self,11804,timer,fv);  
        		fightsystem.RemoveBuff(self,11805,timer,fv); 
        		fightsystem.RemoveBuff(self,11806,timer,fv);  
        		fightsystem.RemoveBuff(self,11807,timer,fv);  
        		fightsystem.RemoveBuff(self,11808,timer,fv); 
        		fightsystem.RemoveBuff(self,11810,timer,fv);  
        		fightsystem.RemoveBuff(self,11811,timer,fv);  
        		fightsystem.RemoveBuff(self,11812,timer,fv); 
        		fightsystem.RemoveBuff(self,11813,timer,fv);  
        		fightsystem.RemoveBuff(self,11815,timer,fv);  
        		fightsystem.RemoveBuff(self,11816,timer,fv); 
        		fightsystem.RemoveBuff(self,11820,timer,fv);  
        		fightsystem.RemoveBuff(self,11821,timer,fv);  
        		fightsystem.RemoveBuff(self,11826,timer,fv); 
        		fightsystem.RemoveBuff(self,11827,timer,fv);  
        		fightsystem.RemoveBuff(self,11828,timer,fv);  
        		fightsystem.RemoveBuff(self,11829,timer,fv); 
        		fightsystem.RemoveBuff(self,11830,timer,fv);  
        		fightsystem.RemoveBuff(self,11833,timer,fv);  
        		fightsystem.RemoveBuff(self,11835,timer,fv); 
        		fightsystem.RemoveBuff(self,11836,timer,fv);  
        		fightsystem.RemoveBuff(self,11837,timer,fv);  
        		fightsystem.RemoveBuff(self,11838,timer,fv); 
        		fightsystem.RemoveBuff(self,11839,timer,fv);  
        		fightsystem.RemoveBuff(self,11843,timer,fv);  
        		fightsystem.RemoveBuff(self,11882,timer,fv); 
        		fightsystem.RemoveBuff(self,11884,timer,fv);  
        		fightsystem.RemoveBuff(self,11885,timer,fv);  
        		fightsystem.RemoveBuff(self,11886,timer,fv); 
        		fightsystem.RemoveBuff(self,11897,timer,fv);  
        		fightsystem.RemoveBuff(self,11903,timer,fv);  
        		fightsystem.RemoveBuff(self,11904,timer,fv);  
        		fightsystem.RemoveBuff(self,11908,timer,fv);  
        		fightsystem.RemoveBuff(self,11909,timer,fv);  
    		}
			return UserSkillReturn.SKILL_SUCCESS;
    	}
    	else if((BuffChongGaoGuangHuan1 != null)&&(self.GetInitMaxMP()*0.1>MPLast)&&(LogicTool.RandInt(0, 99) < 30))
    	{
			MPRecover = 25;
			self.MP += MPRecover*0.01*self.GetInitMaxMP();
			fv.IncMP = self.MP;
			//检查buff
    		if((ClearBuff1 != null)||(ClearBuff2 != null)||(ClearBuff3 != null)||(ClearBuff4 != null)||(ClearBuff5 != null)||(ClearBuff6 != null)||(ClearBuff7 != null)||(ClearBuff8 != null)||(ClearBuff9 != null)||(ClearBuff10 != null)||(ClearBuff11 != null)||(ClearBuff12 != null)||(ClearBuff13 != null)||(ClearBuff14 != null)||(ClearBuff15 != null)||(ClearBuff16 != null)||(ClearBuff17 != null)||(ClearBuff18 != null) ||(ClearBuff19 != null)||(ClearBuff20 != null)||(ClearBuff21 != null)||(ClearBuff22 != null)||(ClearBuff23 != null)||(ClearBuff24 != null)||(ClearBuff25 != null)||(ClearBuff26 != null)||(ClearBuff27 != null)||(ClearBuff28 != null)||(ClearBuff29 != null)||(ClearBuff30 != null)||(ClearBuff31 != null)||(ClearBuff32 != null)||(ClearBuff33 != null)||(ClearBuff34 != null)||(ClearBuff35 != null)||(ClearBuff36 != null)||(ClearBuff37 != null)||(ClearBuff38 != null))
    		{
        		fightsystem.RemoveBuff(self,1212,timer,fv);  
        		fightsystem.RemoveBuff(self,11801,timer,fv);  
        		fightsystem.RemoveBuff(self,11802,timer,fv); 
        		fightsystem.RemoveBuff(self,11803,timer,fv);  
        		fightsystem.RemoveBuff(self,11804,timer,fv);  
        		fightsystem.RemoveBuff(self,11805,timer,fv); 
        		fightsystem.RemoveBuff(self,11806,timer,fv);  
        		fightsystem.RemoveBuff(self,11807,timer,fv);  
        		fightsystem.RemoveBuff(self,11808,timer,fv); 
        		fightsystem.RemoveBuff(self,11810,timer,fv);  
        		fightsystem.RemoveBuff(self,11811,timer,fv);  
        		fightsystem.RemoveBuff(self,11812,timer,fv); 
        		fightsystem.RemoveBuff(self,11813,timer,fv);  
        		fightsystem.RemoveBuff(self,11815,timer,fv);  
        		fightsystem.RemoveBuff(self,11816,timer,fv); 
        		fightsystem.RemoveBuff(self,11820,timer,fv);  
        		fightsystem.RemoveBuff(self,11821,timer,fv);  
        		fightsystem.RemoveBuff(self,11826,timer,fv); 
        		fightsystem.RemoveBuff(self,11827,timer,fv);  
        		fightsystem.RemoveBuff(self,11828,timer,fv);  
        		fightsystem.RemoveBuff(self,11829,timer,fv); 
        		fightsystem.RemoveBuff(self,11830,timer,fv);  
        		fightsystem.RemoveBuff(self,11833,timer,fv);  
        		fightsystem.RemoveBuff(self,11835,timer,fv); 
        		fightsystem.RemoveBuff(self,11836,timer,fv);  
        		fightsystem.RemoveBuff(self,11837,timer,fv);  
        		fightsystem.RemoveBuff(self,11838,timer,fv); 
        		fightsystem.RemoveBuff(self,11839,timer,fv);  
        		fightsystem.RemoveBuff(self,11843,timer,fv);  
        		fightsystem.RemoveBuff(self,11882,timer,fv); 
        		fightsystem.RemoveBuff(self,11884,timer,fv);  
        		fightsystem.RemoveBuff(self,11885,timer,fv);  
        		fightsystem.RemoveBuff(self,11886,timer,fv); 
        		fightsystem.RemoveBuff(self,11897,timer,fv);  
        		fightsystem.RemoveBuff(self,11903,timer,fv);  
        		fightsystem.RemoveBuff(self,11904,timer,fv);  
        		fightsystem.RemoveBuff(self,11908,timer,fv);  
        		fightsystem.RemoveBuff(self,11909,timer,fv);   
    		}
			return UserSkillReturn.SKILL_SUCCESS;
    	}
    	else if((BuffChongGaoGuangHuan2 != null)&&(self.GetInitMaxMP()*0.1>MPLast)&&(LogicTool.RandInt(0, 99) < 30))
    	{
			MPRecover = 30;
			self.MP += MPRecover*0.01*self.GetInitMaxMP();
			fv.IncMP = self.MP;
			//检查buff
    		if((ClearBuff1 != null)||(ClearBuff2 != null)||(ClearBuff3 != null)||(ClearBuff4 != null)||(ClearBuff5 != null)||(ClearBuff6 != null)||(ClearBuff7 != null)||(ClearBuff8 != null)||(ClearBuff9 != null)||(ClearBuff10 != null)||(ClearBuff11 != null)||(ClearBuff12 != null)||(ClearBuff13 != null)||(ClearBuff14 != null)||(ClearBuff15 != null)||(ClearBuff16 != null)||(ClearBuff17 != null)||(ClearBuff18 != null) ||(ClearBuff19 != null)||(ClearBuff20 != null)||(ClearBuff21 != null)||(ClearBuff22 != null)||(ClearBuff23 != null)||(ClearBuff24 != null)||(ClearBuff25 != null)||(ClearBuff26 != null)||(ClearBuff27 != null)||(ClearBuff28 != null)||(ClearBuff29 != null)||(ClearBuff30 != null)||(ClearBuff31 != null)||(ClearBuff32 != null)||(ClearBuff33 != null)||(ClearBuff34 != null)||(ClearBuff35 != null)||(ClearBuff36 != null)||(ClearBuff37 != null)||(ClearBuff38 != null))
    		{
        		fightsystem.RemoveBuff(self,1212,timer,fv);  
        		fightsystem.RemoveBuff(self,11801,timer,fv);  
        		fightsystem.RemoveBuff(self,11802,timer,fv); 
        		fightsystem.RemoveBuff(self,11803,timer,fv);  
        		fightsystem.RemoveBuff(self,11804,timer,fv);  
        		fightsystem.RemoveBuff(self,11805,timer,fv); 
        		fightsystem.RemoveBuff(self,11806,timer,fv);  
        		fightsystem.RemoveBuff(self,11807,timer,fv);  
        		fightsystem.RemoveBuff(self,11808,timer,fv); 
        		fightsystem.RemoveBuff(self,11810,timer,fv);  
        		fightsystem.RemoveBuff(self,11811,timer,fv);  
        		fightsystem.RemoveBuff(self,11812,timer,fv); 
        		fightsystem.RemoveBuff(self,11813,timer,fv);  
        		fightsystem.RemoveBuff(self,11815,timer,fv);  
        		fightsystem.RemoveBuff(self,11816,timer,fv); 
        		fightsystem.RemoveBuff(self,11820,timer,fv);  
        		fightsystem.RemoveBuff(self,11821,timer,fv);  
        		fightsystem.RemoveBuff(self,11826,timer,fv); 
        		fightsystem.RemoveBuff(self,11827,timer,fv);  
        		fightsystem.RemoveBuff(self,11828,timer,fv);  
        		fightsystem.RemoveBuff(self,11829,timer,fv); 
        		fightsystem.RemoveBuff(self,11830,timer,fv);  
        		fightsystem.RemoveBuff(self,11833,timer,fv);  
        		fightsystem.RemoveBuff(self,11835,timer,fv); 
        		fightsystem.RemoveBuff(self,11836,timer,fv);  
        		fightsystem.RemoveBuff(self,11837,timer,fv);  
        		fightsystem.RemoveBuff(self,11838,timer,fv); 
        		fightsystem.RemoveBuff(self,11839,timer,fv);  
        		fightsystem.RemoveBuff(self,11843,timer,fv);  
        		fightsystem.RemoveBuff(self,11882,timer,fv); 
        		fightsystem.RemoveBuff(self,11884,timer,fv);  
        		fightsystem.RemoveBuff(self,11885,timer,fv);  
        		fightsystem.RemoveBuff(self,11886,timer,fv); 
        		fightsystem.RemoveBuff(self,11897,timer,fv);  
        		fightsystem.RemoveBuff(self,11903,timer,fv);  
        		fightsystem.RemoveBuff(self,11904,timer,fv);  
        		fightsystem.RemoveBuff(self,11908,timer,fv);  
        		fightsystem.RemoveBuff(self,11909,timer,fv);  
    		}
			return UserSkillReturn.SKILL_SUCCESS;
    	}		
   	  	else 
  	    {
       		return UserSkillReturn.SKILL_LOSE;
    	}
}