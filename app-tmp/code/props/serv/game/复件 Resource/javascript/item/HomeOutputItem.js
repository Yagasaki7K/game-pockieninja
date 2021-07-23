/*
 * Copyright 2009-2011 Dream2 Network Technology, Inc. All rights reserved.
 */

importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.Kernel.Tools);


function OnUse(jssystem, item, player)
{
    var m_Kernel = jssystem.GetKernel();

    if (! m_Kernel.Exists(item))
        return;

    if (! m_Kernel.Exists(player))
        return;

    var msg = new VarList();
    msg.AddObject(item);
    //使用家园仓库仓库
    m_Kernel.Command(player, CommandDefine.COMMAND_HOME_USE_DEPOT_ITEM, msg);
}
