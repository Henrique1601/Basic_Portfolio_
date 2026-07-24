-- =============================================
-- SQL COMPLETO PARA SUPABASE
-- Execute TUDO de uma vez
-- =============================================

-- 1. Criar tabela de visitas
CREATE TABLE IF NOT EXISTS page_visits (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    page_slug TEXT UNIQUE NOT NULL,
    visit_count BIGINT DEFAULT 1,
    last_visited TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Criar tabela de downloads do CV
CREATE TABLE IF NOT EXISTS cv_downloads (
    id INTEGER PRIMARY KEY DEFAULT 1,
    download_count BIGINT DEFAULT 0
);

-- 3. Inserir dados iniciais
INSERT INTO page_visits (page_slug, visit_count) VALUES ('portfolio-henrique', 1) ON CONFLICT (page_slug) DO NOTHING;
INSERT INTO cv_downloads (id, download_count) VALUES (1, 0) ON CONFLICT (id) DO NOTHING;

-- 4. Habilitar RLS
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE cv_downloads ENABLE ROW LEVEL SECURITY;

-- 5. Deletar políticas antigas
DROP POLICY IF EXISTS "public_access" ON page_visits;
DROP POLICY IF EXISTS "public_access_visits" ON page_visits;
DROP POLICY IF EXISTS "public_access" ON cv_downloads;
DROP POLICY IF EXISTS "public_access_cv" ON cv_downloads;

-- 6. Criar políticas públicas para page_visits
CREATE POLICY "public_read_visits" ON page_visits FOR SELECT TO anon USING (true);
CREATE POLICY "public_update_visits" ON page_visits FOR UPDATE TO anon USING (true);
CREATE POLICY "public_insert_visits" ON page_visits FOR INSERT TO anon WITH CHECK (true);

-- 7. Criar políticas públicas para cv_downloads
CREATE POLICY "public_read_cv" ON cv_downloads FOR SELECT TO anon USING (true);
CREATE POLICY "public_update_cv" ON cv_downloads FOR UPDATE TO anon USING (true);
CREATE POLICY "public_insert_cv" ON cv_downloads FOR INSERT TO anon WITH CHECK (true);

-- 8. Verificar resultado
SELECT 'page_visits' as tabela, * FROM page_visits;
SELECT 'cv_downloads' as tabela, * FROM cv_downloads;
