Gem::Specification.new do |s|
  s.name        = 'concrete-jekyll'
  s.version     = '1.3.0'
  s.date        = '2016-05-28'
  s.summary     = "A Jekyll theme built on the Concrete framework."
  s.description = "Stock Jekyll theme."
  s.authors     = ["George Butter"]
  s.email       = 'me@georgebutter.com'

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_posts|_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.homepage    = 'http://rubygems.org/gems/concrete-jekyll'
  s.license     = 'MIT'
  s.metadata["plugin_type"] = "theme"
  s.add_runtime_dependency "jekyll", "~> 3.3"
  s.add_development_dependency "bundler", "~> 1.12"
end
