-- =============================================
-- CORRIGIR PERMISSÕES SUPABASE
-- Execute no SQL Editor do Supabase
-- =============================================

-- Limpar configurações anteriores
DROP POLICY IF EXISTS "public_access" ON page_visits;
DROP POLICY IF EXISTS "public_access_visits" ON page_visits;
DROP POLICY IF EXISTS "public_access_cv" ON cv_downloads;
DROP POLICY IF EXISTS "public_access" ON cv_downloads;

-- Recriar políticas com permissões corretas
CREATE POLICY "public_read_visits" ON page_visits FOR SELECT TO anon USING (true);
CREATE POLICY "public_update_visits" ON page_visits FOR UPDATE TO anon USING (true);
CREATE POLICY "public_insert_visits" ON page_visits FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "public_read_cv" ON cv_downloads FOR SELECT TO anon USING (true);
CREATE POLICY "public_update_cv" ON cv_downloads FOR UPDATE TO anon USING (true);
CREATE POLICY "public_insert_cv" ON cv_downloads FOR INSERT TO anon WITH CHECK (true);

-- Verificar se ficou correto
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual FROM pg_policies WHERE tablename IN ('page_visits', 'cv_downloads');
