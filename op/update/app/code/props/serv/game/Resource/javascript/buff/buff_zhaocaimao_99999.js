importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//清暴击，减攻，清闪
function OnAdd(fightsystem, self, buff, fv, timer)
{    
     if(self.Level == 1)
     {
         fightsystem.ChangeAtk(self,self.MinAtkMul-30,self.MinAtkAdd,self.MaxAtkMul-30,self.MaxAtkAdd);
         fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd-99);
         self.CritMul -= 480;
         self.Tough -= 480;
     }
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    
    if(self.Level == 1)
    {
        fightsystem.ChangeAtk(self,self.MinAtkMul+30,self.MinAtkAdd,self.MaxAtkMul+30,self.MaxAtkAdd);
        fightsystem.ChangeDodge(self,self.DodgeMulMul,self.DodgeMulAdd+99);
        self.CritMul += 480;
        self.Tough += 480;
    }
}