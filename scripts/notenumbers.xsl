<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    version="3.0">
    
    <xsl:output method="xml" indent="yes"/>
    <xsl:mode on-no-match="shallow-copy"/>
    
    <xsl:template match="note">
        <note xmlns="http://www.tei-c.org/ns/1.0" n="{count(preceding::note) + 1}">
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates select="node()"/>
        </note>
    </xsl:template>
    
</xsl:stylesheet>