SELECT table_name FROM information_schema.tables WHERE table_schema = ''public'' AND table_type = ''BASE TABLE'';
SELECT column_name, is_nullable, data_type FROM information_schema.columns WHERE table_name = ''Task'';
SELECT COUNT(*) FROM "Task";
SELECT COUNT(*) FROM "User";
