select * 
from  rposts p 
join rsubreads s on p.subread_id = s.id
where subread_id = $1;