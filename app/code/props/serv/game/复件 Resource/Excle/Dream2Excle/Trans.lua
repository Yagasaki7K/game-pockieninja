require("TransFun")

--应用程序初始化后调用
function on_sys_init()
	--生成目录树
	for i , n in ipairs(GenFile) do
		--se_trace(n.subdir .. ':' .. n.name);
		se_tree_addnode(n.subdir,n.name);
	end

	--设置List控件
	se_list_addcol("Excel",200);
	se_list_addcol("Sheet",200);
	return 1;
end

--生成项被选中时候调用
function on_node_select(item)
	for _ , n in ipairs(GenFile) do
		if n.name == item then
			se_list_clear();
			for _ , it in ipairs(n.step) do
				local row = se_list_addrow();
				se_list_setrow(row,0,it.excel);
				se_list_setrow(row,1,it.sheet);
			end
		end
	end
	return 1;
end

--Sheet被选中时调用
function on_seet_select(index)
	--se_trace("select" .. index);
	return 1;
end

--点击开始生成按钮
function on_click_btnstart()
end

--生成线程调用
function on_work(...)
	se_trace("转换线程启动");
	for _ , v in ipairs(arg) do
		for _ , n in ipairs(GenFile) do
			if n.name == v then
				if type_fun[n.type](n) == 0 then

				end
			end
		end
	end
	return 1;
end
