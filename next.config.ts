import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// gera saída como servidor autônomo para o docker
	output: "standalone",
	// caminho base, não utilizado neste projeto
	// basePath: '/minhaabril',
	// trailingSlash: true,
};

export default nextConfig;
