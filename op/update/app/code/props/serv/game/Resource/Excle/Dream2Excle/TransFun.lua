require("tconfig")

--按key排序的辅助函数
function pairsByKeys(t, f)
	local a = {}
	for n in pairs(t) do table.insert(a, n) end
	table.sort(a, f)
	local i = 0					-- iterator variable
	local iter = function ()		-- iterator function
		i = i + 1
		if a[i] == nil then return nil
		else return a[i], t[a[i]]
		end
	end
	return iter
end

-- 0 模式转换 即Normal模式 生成普通的ini文件
function trans_type0(item)

	local steps = item.step;
	--输入为空则返回
	if table.getn(steps) <= 0 then
		se_trace( "steps 为空" );
		return 0;
	end

	local tfile = {};
	local scount = 0;
	--依次读取每个sheet
	for _ , src in ipairs(steps) do
		local szexcel = se_transdir(ExcelPath .. '\\' .. src.excel);
		local szsheet = src.sheet;
		--打开失败则直接返回

		if se_openexcel(szexcel,szsheet) ~= 1 then
			se_trace("转换" .. src.excel .. ":" .. src.sheet .. "时错误");
			return 0;
		end

		se_trace("分析" .. src.excel .. ":" .. src.sheet);
		local max_row = se_getmax_row();	--最大行数
		local max_col = se_getmax_col();	--最大列数
		if max_row <= 2 then
			--提示行数不够
			se_trace("error".."Excel行数太少" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

        --检查时否存在ID字段
		local szid = se_getcell(2,1);
		if szid ~= "ID" then
		    se_trace("A2 单元格必须是ID");
			return 0;
		end

		--检查有没有重复ID
		local ct = {};
		for i = 3 , max_row do
			local sz = se_getcell(i,1);
			if sz ~= nil and sz ~= "" then
				if ct[sz] ~= nil then
				    se_trace("sheet" .. szsheet .. "包含重复ID" .. sz);
					return 0;
				else
				   ct[sz] = sz;
				end

			end
		end

		local col_msg = {};
		local col_count = 1;
		--生成列信息
		for c = 2 , max_col do
			local szcell = se_getcell(2,c);
			if szcell ~= nil and szcell ~= "" then
			    if col_msg[col_count] == nil then
					col_msg[col_count] = {};
				end
				col_msg[col_count].col = c;
				col_msg[col_count].text = szcell;
				col_count = col_count + 1;
			end
		end

		local cols = table.getn(col_msg); --指定生成的属性数
		if  cols < 1 then
			--提示cols不为空
			se_trace("error".."Excel属性列没有" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		for i = 3 , max_row do
   			local section = se_getcell(i,1);
			if section ~= nil and section ~= "" then
			    if tfile[section] == nil then
					tfile[section] = {};
					tfile[section].section = "";
					tfile[section].property = {};
				end
				tfile[section].section = section;
				for j = 1 , cols do
					local col = col_msg[j].col;
					local szcell = se_getcell(i,col); --单元格数据
					if szcell ~= nil and szcell ~= "" then
						 tfile[section].property[col_msg[j].text] = szcell;
					end
				end
			end
		end

	end

    se_trace("生成文件" .. item.name );
	local hfile = se_openfile(se_transdir(DatFilePath .. "\\" ..item.subdir .. "\\" .. item.name));
	if hfile == nil then
	    se_trace("error".."创建文件" .. item.name .."失败");
	    return 0;
	end
	for _ , r in pairsByKeys(tfile) do
		se_write( hfile,"\r\n[" .. r.section .. "]\r\n");
		for ss , p in pairsByKeys(r.property) do
			se_write(hfile, ss  .. "=" .. p .. "\r\n");
		end
	end
	se_colsefile(hfile);
	return 1;
end

--1类型文件转换  即表格类型转换
function trans_type1(item)
    local steps = item.step;
	--输入为空则返回
	if table.getn(steps) <= 0 then
		se_trace( "steps 为空" );
		return 0;
	end

	local tfile = {};
	--依次读取每个sheet
	for _ , src in ipairs(steps) do
		local szexcel = se_transdir(ExcelPath .. '\\' .. src.excel);
		local szsheet = src.sheet;
		--打开失败则直接返回
		if se_openexcel(szexcel,szsheet) ~= 1 then
			se_trace("转换" .. src.excel .. ":" .. src.sheet .. "时错误");
			return 0;
		end
		se_trace("分析" .. src.excel .. ":" .. src.sheet);
		local max_row = se_getmax_row();	--最大行数
		local max_col = se_getmax_col();	--最大列数
		if max_row <= 2 then
			--提示行数不够
			se_trace("error".."Excel行数太少" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		local szid = se_getcell(2,1);
		if szid ~= "ID" then
		    se_trace("A2 单元格必须是ID");
			return 0;
		end

		local col_msg = {};
		local col_count = 1;
		--生成列信息
		for c = 2 , max_col do
			local szcell = se_getcell(2,c);
			if szcell ~= nil and szcell ~= "" then
			    if col_msg[col_count] == nil then
					col_msg[col_count] = {};
				end
				col_msg[col_count].col = c;
				col_msg[col_count].text = szcell;
				col_count = col_count + 1;
			end
		end

		local cols = table.getn(col_msg); --指定生成的属性数
		if  cols < 1 then
			--提示cols不为空
			se_trace("error".."Excel属性列没有" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		for i = 3 , max_row do
   			local section = se_getcell(i,1);
			if section ~= nil and section ~= "" then
			    if tfile[section] == nil then
					tfile[section] = {};
					tfile[section].section = "";
					tfile[section].rows = {};
				end
    			tfile[section].section = section;
    			local rn = "";
				for j = 1 , cols do
					local col = col_msg[j].col;
					local szcell = se_getcell(i,col); --单元格数据
					if szcell ~= nil and szcell ~= "" then
                    	if rn ~= "" then
							rn = rn .. ",";
						end
						rn = rn .. szcell;
					end
				end
				table.insert(tfile[section].rows,rn);
			end
		end

	end

    se_trace("生成文件" .. item.name );
  	local hfile = se_openfile(se_transdir(DatFilePath .. "\\" ..item.subdir .. "\\" .. item.name));
	if hfile == nil then
 		se_trace("error".."创建文件" .. item.name .."失败");
	    return 0;
	end
	for _ , r in pairsByKeys(tfile) do
		se_write( hfile,"\r\n[" .. r.section .. "]\r\n");
		for i , row in pairs(r.rows) do
			se_write(hfile, "r=" .. row .. "\r\n");
		end
	end
	se_colsefile(hfile);
end

--2类型文件转换  即特殊类型转换
function trans_type2(item)
    local steps = item.step;
	--输入为空则返回
	if table.getn(steps) <= 0 then
		se_trace( "steps 为空" );
		return 0;
	end
end

--3类型文件转换  即r类型转换
function trans_type3(item)
    local steps = item.step;
	--输入为空则返回
	if table.getn(steps) <= 0 then
		se_trace( "steps 为空" );
		return 0;
	end

	local tfile = {};
	--依次读取每个sheet
	for _ , src in ipairs(steps) do
		local szexcel = se_transdir(ExcelPath .. '\\' .. src.excel);
		local szsheet = src.sheet;
		--打开失败则直接返回
		if se_openexcel(szexcel,szsheet) ~= 1 then
			se_trace("转换" .. src.excel .. ":" .. src.sheet .. "时错误");
			return 0;
		end
		se_trace("分析" .. src.excel .. ":" .. src.sheet);
		local max_row = se_getmax_row();	--最大行数
		local max_col = se_getmax_col();	--最大列数
		if max_row <= 2 then
			--提示行数不够
			se_trace("error".."Excel行数太少" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		local szid = se_getcell(2,1);
		if szid ~= "ID" then
		    se_trace("A2 单元格必须是ID");
			return 0;
		end

		--检查有没有重复ID
		local ct = {};
		for i = 3 , max_row do
			local sz = se_getcell(i,1);
			if sz ~= nil and sz ~= "" then
				if ct[sz] ~= nil then
				    se_trace("sheet" .. szsheet .. "包含重复ID" .. sz);
					return 0;
				else
				   ct[sz] = sz;
				end

			end
		end


		local col_msg = {};
		local col_count = 1;
		--生成列信息
		for c = 2 , max_col do
			local szcell = se_getcell(2,c);
			if szcell ~= nil and szcell ~= "" then
			    if col_msg[col_count] == nil then
					col_msg[col_count] = {};
				end
				col_msg[col_count].col = c;
				col_msg[col_count].text = szcell;
				col_count = col_count + 1;
			end
		end

		local cols = table.getn(col_msg); --指定生成的属性数
		if  cols < 1 then
			--提示cols不为空
			se_trace("error".."Excel属性列没有" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		--sheet名作为section字段
		if tfile[szsheet] ~= nil then
			se_trace("sheet" .. szsheet .. "重复");
			return 0;
		end

		tfile[szsheet] = {};
		tfile[szsheet].section = szsheet;
		tfile[szsheet].rows = {};

		for i = 3 , max_row do
   			local section = se_getcell(i,1);
			if section ~= nil and section ~= "" then
    			local rn = "";
				for j = 1 , cols do
					local col = col_msg[j].col;
					local szcell = se_getcell(i,col); --单元格数据
					if szcell ~= nil and szcell ~= "" then
                    	if rn ~= "" then
							rn = rn .. ",";
						end
						rn = rn .. szcell;
					end
				end
				table.insert(tfile[szsheet].rows,section .. "=" ..rn);
			end
		end

	end

    se_trace("生成文件" .. item.name );
  	local hfile = se_openfile(se_transdir(DatFilePath .. "\\" ..item.subdir .. "\\" .. item.name));
	if hfile == nil then
		se_trace("error".."创建文件" .. item.name .."失败");
	    return 0;
	end
	for _ , r in pairsByKeys(tfile) do
		se_write( hfile,"\r\n[" .. r.section .. "]\r\n");
		for i , row in pairs(r.rows) do
			se_write(hfile,row .. "\r\n");
		end
	end
	se_colsefile(hfile);
end

--4类型文件转换  即不定参数 K=VALUE
function trans_type4(item)
    local steps = item.step;
	--输入为空则返回
	if table.getn(steps) <= 0 then
		se_trace( "steps 为空" );
		return 0;
	end

	local tfile = {};
	--依次读取每个sheet
	for _ , src in ipairs(steps) do
		local szexcel = se_transdir(ExcelPath .. '\\' .. src.excel);
		local szsheet = src.sheet;
		--打开失败则直接返回
		if se_openexcel(szexcel,szsheet) ~= 1 then
			se_trace("转换" .. src.excel .. ":" .. src.sheet .. "时错误");
			return 0;
		end
		se_trace("分析" .. src.excel .. ":" .. src.sheet);
		local max_row = se_getmax_row();	--最大行数
		local max_col = se_getmax_col();	--最大列数
		if max_row <= 2 then
			--提示行数不够
			se_trace("error".."Excel行数太少" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		if max_col ~= 4 then
			--提示列数不对
			se_trace("error".."Excel列数不对" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		local szid = se_getcell(2,1);
		if szid ~= "ID" then
		    se_trace("A2 单元格必须是ID");
			return 0;
		end


		for i = 3 , max_row do
   			local section = se_getcell(i,1);
			if section ~= nil and section ~= "" then
				if tfile[section] == nil then
					tfile[section] = {};
					tfile[section].section = section;
					tfile[section].rows = {};
				end

				local prokey = se_getcell(i,3);
				local provalue = se_getcell(i,4);

				table.insert(tfile[section].rows,prokey .. "=" ..provalue);
			end
		end

	end

    se_trace("生成文件" .. item.name );
  	local hfile = se_openfile(se_transdir(DatFilePath .. "\\" ..item.subdir .. "\\" .. item.name));
	if hfile == nil then
		se_trace("error".."创建文件" .. item.name .."失败");
	    return 0;
	end
	for _ , r in pairsByKeys(tfile) do
		se_write( hfile,"\r\n[" .. r.section .. "]\r\n");
		for i , row in pairs(r.rows) do
			se_write(hfile,row .. "\r\n");
		end
	end
	se_colsefile(hfile);
end

--5类型文件转换  sec顺序排列　　
function trans_type5(item)

	local steps = item.step;
	--输入为空则返回
	if table.getn(steps) <= 0 then
		se_trace( "steps 为空" );
		return 0;
	end

	local tfile = {};
	local scount = 0;
	--依次读取每个sheet
	for _ , src in ipairs(steps) do
		local szexcel = se_transdir(ExcelPath .. '\\' .. src.excel);
		local szsheet = src.sheet;
		--打开失败则直接返回

		if se_openexcel(szexcel,szsheet) ~= 1 then
			se_trace("转换" .. src.excel .. ":" .. src.sheet .. "时错误");
			return 0;
		end

		se_trace("分析" .. src.excel .. ":" .. src.sheet);
		local max_row = se_getmax_row();	--最大行数
		local max_col = se_getmax_col();	--最大列数
		if max_row <= 2 then
			--提示行数不够
			se_trace("error".."Excel行数太少" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		local col_msg = {};
		local col_count = 1;
		--生成列信息
		for c = 1 , max_col do
			local szcell = se_getcell(2,c);
			if szcell ~= nil and szcell ~= "" then
			    if col_msg[col_count] == nil then
					col_msg[col_count] = {};
				end
				col_msg[col_count].col = c;
				col_msg[col_count].text = szcell;
				col_count = col_count + 1;
			end
		end

		local cols = table.getn(col_msg); --指定生成的属性数
		if  cols < 1 then
			--提示cols不为空
			se_trace("error".."Excel属性列没有" .. src.excel .. ":" .. src.sheet);
			return 0;
		end

		for i = 4 , max_row do
   			local section = i - 4
			if section ~= nil and section ~= "" then
			  if tfile[section] == nil then
					tfile[section] = {};
					tfile[section].section = "";
					tfile[section].property = {};
				end
				tfile[section].section = i - 4;
				for j = 1 , cols do
					local col = col_msg[j].col;
					local szcell = se_getcell(i,col); --单元格数据
					if szcell ~= nil and szcell ~= "" then
						 tfile[section].property[col_msg[j].text] = szcell;
					end
				end
			end
		end

	end

  se_trace("生成文件" .. item.name );
	local hfile = se_openfile(se_transdir(DatFilePath .. "\\" ..item.subdir .. "\\" .. item.name));
	if hfile == nil then
	    se_trace("error".."创建文件" .. item.name .."失败");
	    return 0;
	end

	for _ , r in pairsByKeys(tfile) do
		se_write( hfile,"\r\n[" .. r.section .. "]\r\n");
		for ss , p in pairsByKeys(r.property) do
			se_write(hfile, ss  .. "=" .. p .. "\r\n");
		end
	end
	se_colsefile(hfile);
	return 1;
end

--生成类型与生成函数的对应
type_fun = {
	[0] = trans_type0,
	[1] = trans_type1,
	[2] = trans_type2,
	[3] = trans_type3,
	[4] = trans_type4,
	[5] = trans_type5,
};
