select * 
from  rposts p 
join rsubreads on p.subread_id = rsubreads.subread_id
where id = $1;