/*
 * Copyright 2009 Dream2 Netwok Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Kernel.KernelPublic);
importPackage(com.d2.serv.game.Kernel.Tools);
importPackage(com.d2.serv.game.Public);


function OnUse(jssystem, self, user)
{
    var kernel = jssystem.GetKernel();
    var containersystem = jssystem.GetContainerSystem();
    kernel.DestroySelf(self);

    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i150022", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i270050", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i220050", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i210050", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i230050", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i240050", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i160006", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i160016", 1);
    containersystem.AutoPlaceItemToBox(user, "ToolBox", "i160231", 1);
}