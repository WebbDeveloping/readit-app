select *
from rposts p
    join rsubreads on p.subread_id = rsubreads.subread_id
where p.subread_id < 100
order by post_created_at