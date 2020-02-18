select p.id, p.image, p.title, p.post_description, p.url, p.subread_id, s.subread_id, s.name, s.description
from rposts p
    join rsubreads s on p.subread_id = s.subread_id
where p.subread_id = $1;