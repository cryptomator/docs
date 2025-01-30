# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SOURCEDIR     = source
BUILDDIR      = build

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

livehtml:
	sphinx-autobuild -b html $(ALLSPHINXOPTS) $(SOURCEDIR) $(BUILDDIR)/html

gh-pages:
	@$(SPHINXBUILD) -b html "$(SOURCEDIR)" $(BUILDDIR)/html/en/latest $(SPHINXOPTS)
	# Ensure Jekyll is enabled with correct YAML formatting
	printf -- "plugins:\n  - jekyll-redirect-from\n" > $(BUILDDIR)/html/_config.yml
	# Create redirect for root to /en/latest/
	printf -- "---\nredirect_to: /en/latest/\n---\n" > $(BUILDDIR)/html/index.md
	# Create redirect for /en/ to /en/latest/
	printf -- "---\nredirect_to: /en/latest/\n---\n" > $(BUILDDIR)/html/en/index.md
	# Ensure GitHub Pages processes Jekyll
	rm -f $(BUILDDIR)/html/.nojekyll

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)